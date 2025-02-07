import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from './task.entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<TaskEntity> {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async create(task: TaskEntity): Promise<TaskEntity> {
    return await this.taskRepository.save(task);
  }

  async update(task: TaskEntity): Promise<UpdateResult> {
    return await this.taskRepository.update(task.id, task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
