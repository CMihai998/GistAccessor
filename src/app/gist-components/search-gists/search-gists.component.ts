import { Component, OnInit } from '@angular/core';
import { Octokit } from "@octokit/core";

@Component({
  selector: 'app-search-gists',
  templateUrl: './search-gists.component.html',
  styleUrls: ['./search-gists.component.css']
})
export class SearchGistsComponent implements OnInit {
  gists: any
  constructor(private octokit: Octokit) { }

  ngOnInit(): void {
  }

  searchGists(username: String) {
    this.octokit.request(`GET /users/${username}/gists`)
      .then(response => this.gists = response.data)
  }

}
