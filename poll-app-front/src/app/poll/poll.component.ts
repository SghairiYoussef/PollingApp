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

  newPoll: Poll = {
    id: 0,
    question: '',
    options: [
      { optionText: '', voteCount: 0 },
      { optionText: '', voteCount: 0 }
    ]
  }
  
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

  createPoll() {
    if (this.newPoll.question.trim() === '') {
      alert('Question cannot be empty.');
      return;
    }
    if (this.newPoll.options.some(option => option.optionText.trim() === '')) {
      alert('All options must be filled in.');
      return;
    }

    const pollToSend = { ...this.newPoll };
    delete (pollToSend as any).id;

    this.pollService.createPoll(pollToSend).subscribe({
      next: (createdPoll: Poll) => {
        this.polls.push(createdPoll);
        this.resetPoll();
      },
      error: (err: any) => {
        console.log('Error creating poll', err);
      }
    });
  }

  resetPoll() {
    this.newPoll = {
      id: 0,
      question: '',
      options: [
        { optionText: '', voteCount: 0 },
        { optionText: '', voteCount: 0 }
      ]
    };
  }

  addOption() {
    if (this.newPoll.options.length < 10) {
      this.newPoll.options.push({ optionText: '', voteCount: 0 });
    }
    else {
      alert('Maximum of 10 options allowed.');
    }
  }

  removeOption(index: number) {
    if (this.newPoll.options.length > 2) {
      this.newPoll.options.splice(index, 1);
    } else {
      alert('At least two options are required.');
    }
  }

  vote(pollId: number, optionIndex: number) {
    this.pollService.vote(pollId, optionIndex).subscribe({
      next: () => {
        this.loadPolls();
      },
      error: (err: any) => {
        console.log('Error voting', err);
      }
    });
  }

  trackByIndex(index: number): number {
    console.log('trackByIndex', index);
    return index;
  }

}
