import { Component, inject, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

interface Ingredient {
  name: string,
  quantity: number,
}

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent implements OnInit{
  taskTitle: string = 'Read cup of coffee';
  isComplete: boolean = false;
  
  private calculatorService = inject(CalculatorService);
  totalCost = this.calculatorService.add(50, 50);

  ingredientList: Ingredient[] = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];

  constructor() {
    console.log('Initial value: ', this.isComplete);
  }

  ngOnInit(): void {
    console.log(this.totalCost);
  }

  completeTask(): void {
    this.isComplete = true;
  }

  switchTaskState(): void {
    this.isComplete = !this.isComplete;
    console.log('Current State: ', this.isComplete);
  }

  updateTitle( newTitle: string ): void {
    this.taskTitle = newTitle;
  }

  listenToClickPosition(event: MouseEvent) {
    console.log('Eje X: ',event.clientX);
    console.log('Eje Y: ',event.clientY);
  }

  
}
