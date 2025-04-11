import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll.models';
import { PollService } from '../poll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit {

  
  polls: Poll[] = [];
  
  constructor(private readonly pollService: PollService) { }
  
  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data: any) => {
        this.polls = data;
      },
      error: (err: any) => {
        console.log('Error loading polls', err);
      }
    });
  }
}
