import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../../servicess/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

    results: Observable<any>;
    questionId = 0;
    public viewAnswer = false;

    /**
     * Constructor of our first page
     * @param questionService The question Service to get data
     */
    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.getNext(this.questionId);
    }

    getNext(id) {
        // Call our service function which returns an Observable
        id = Number(id) + 1;
        console.log(id);
        this.results = this.questionService.getQuestion(id);
    }

    getPrevious(id) {
        // Call our service function which returns an Observable
        id = id - 1;
        this.results = this.questionService.getQuestion(id);
    }

    viewAnswers() {
        if (this.viewAnswer) {
            this.viewAnswer = false;
        } else {
            this.viewAnswer = true;
        }
    }

}
