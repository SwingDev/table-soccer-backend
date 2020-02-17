import { FindManyOptions, Repository } from 'typeorm';

/**
 * Base class for all services based on crud
 */
export class CRUDService<E, K=number> {
  constructor(protected readonly repository: Repository<E>) { }

  public async save(entity: E): Promise<E> {
    return this.repository.save(entity);
  }

  public async find(id: K): Promise<E | undefined> {
    return this.repository.findOne(id);
  }

  public async list(options?: FindManyOptions): Promise<E[]> {
    return this.repository.find(options);
  }

  // tslint:disable-next-line: no-reserved-keywords
  public async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
