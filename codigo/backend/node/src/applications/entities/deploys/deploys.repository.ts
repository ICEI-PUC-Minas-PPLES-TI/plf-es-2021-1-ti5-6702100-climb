import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Deploy } from './deploys.entity';
import { ReqCreateDto } from '../../dto/deploys/req-create.dto';
import { v4 } from 'uuid';
import { Application } from '../application.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { ProvidersEnum } from 'src/shared/enum/providers.enum';
import { ReqUpdateDto } from 'src/applications/dto/deploys/req-update.dto';
import { ReqDeleteDto } from 'src/applications/dto/deploys/req-delete.dto';
import { DeployType } from 'src/shared/enum/deploy-message-type.enum';

@EntityRepository(Deploy)
export class DeploysRepository extends Repository<Deploy> {
  async createNewDeploy(
    application: Application,
    user: User,
    commit: string,
  ): Promise<ReqCreateDto> {
    const deploy = new Deploy();

    deploy.id = v4();
    deploy.application = application;
    deploy.type = DeployType.CREATE;

    try {
      deploy.save();

      switch ((await application).provider) {
        case ProvidersEnum.GITHUB:
          return {
            ...deploy,
            token: user.gitHubToken,
            commit,
            timestamp: +new Date(),
          };
        case ProvidersEnum.GITLAB:
          return {
            ...deploy,
            token: user.gitLabToken,
            commit,
            timestamp: +new Date(),
          };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createUpdateDeploy(
    application: Application,
    commit: string,
  ): Promise<ReqUpdateDto> {
    const deploy = new Deploy();

    deploy.id = v4();
    deploy.application = application;
    deploy.type = DeployType.UPDATE;

    try {
      deploy.save();

      switch ((await application).provider) {
        case ProvidersEnum.GITHUB:
          return {
            ...deploy,
            commit,
            timestamp: +new Date(),
          };
        case ProvidersEnum.GITLAB:
          return {
            ...deploy,
            commit,
            timestamp: +new Date(),
          };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createDeleteDeploy(application: Application): Promise<ReqDeleteDto> {
    const deploy = new Deploy();

    deploy.id = v4();
    deploy.application = application;
    deploy.type = DeployType.DELETE;

    try {
      deploy.save();

      switch ((await application).provider) {
        case ProvidersEnum.GITHUB:
          return {
            ...deploy,
          };
        case ProvidersEnum.GITLAB:
          return {
            ...deploy,
          };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
