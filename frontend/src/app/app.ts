import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XrayService } from './xray.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'XRay Test Generator';
  jiraEpicUrl = '';
  gherkinTests: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(private xrayService: XrayService) {}

  submitEpic() {
    this.loading = true;
    this.error = null;
    this.gherkinTests = null;
    this.xrayService.generateXrayTests(this.jiraEpicUrl).subscribe({
      next: (res) => {
        this.gherkinTests = res.gherkinTests;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || 'An error occurred1';
        this.loading = false;
      }
    });
  }
}
