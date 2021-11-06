import { Component, OnInit } from '@angular/core';
import { Octokit } from "@octokit/core";

@Component({
  selector: 'app-search-gists',
  templateUrl: './search-gists.component.html',
  styleUrls: ['./search-gists.component.css']
})
export class SearchGistsComponent implements OnInit {
  ACCESS_TOKEN: String = "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"
  gists: any
  constructor(private octokit: Octokit) { }

  ngOnInit(): void {
  }

  searchGists(username: String) {
    this.octokit.request(`GET /users/${username}/gists`, {
      headers: {
        authorization: `token ${this.ACCESS_TOKEN}`
      }
    }).then(response => {
        this.gists = response.data
        for (const gist of this.gists) {
          this.setForksAndFileType(gist)
        }
      })
  }

  setForksAndFileType(gist: any) {
    this.setForks(gist)
    this.setFileData(gist)
  }

  setForks(gist: any) {
      this.octokit.request(`GET /gists/${gist.id}/forks`, {
        headers: {
          authorization: `token ${this.ACCESS_TOKEN}`
        }
      }).then(response => {
        gist.forks_list = []

        if (response.data.length > 0) {
          response.data.sort((a: any, b: any) =>
            (Date.parse(a.created_at).valueOf() > Date.parse(b.created_at).valueOf())
          ? 1 : -1)

          for (let i = 0; i < 3; i++) {
            if (i >= response.data.length)
              break
            gist.forks_list.push({"login": response.data[i].owner.login,
                                  "avatar_url": response.data[i].owner.avatar_url})
          }
        }
        })
  }

  setFileData(gist: any) {
    gist.files_info = []
    for (const [_, fileData] of Object.entries(gist.files)) {
      gist.files_info.push(fileData)
    }
  }
}
