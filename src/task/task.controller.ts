import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<TaskEntity[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.taskService.findOne(params.id);
  }

  @Post()
  create(@Body() task: TaskEntity) {
    return this.taskService.create(task);
  }

  @Put()
  update(@Body() task: TaskEntity) {
    return this.taskService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.taskService.delete(params.id);
  }
}
