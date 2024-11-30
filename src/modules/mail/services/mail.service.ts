import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

import { RoleEnum } from '../../../common/enums/role.enum';
import { Config } from '../../../configs/config.type';
import { UserRepository } from '../../repository/services/user.repository';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService<Config>,
  ) {}

  public async sendMessageAboutAddingCarBrand(brand: string) {
    const mailConfig = this.configService.get('mail');
    const url = `http://localhost:3000/docs#/offers/OffersController_addCarBrand`;
    const admins = await this.userRepository.findBy({ role: RoleEnum.ADMIN });
    const adminsEmails = admins.map((admin) => admin.email);
    await this.mailerService.sendMail({
      to: [adminsEmails, mailConfig.emailForCheck],
      subject: 'Car brand is missing. Please add it.',
      template: 'car-brand',
      context: {
        brand,
        url,
      },
    });
  }

  public async sendMessageAboutCheckingPost(offerId: string) {
    const mailConfig = this.configService.get('mail');
    const url = `http://localhost:3000/docs#/offers/OffersController_get`;
    const admins = await this.userRepository.findBy({ role: RoleEnum.ADMIN });
    const adminsEmails = admins.map((admin) => admin.email);
    await this.mailerService.sendMail({
      to: [adminsEmails, mailConfig.emailForCheck],
      subject: 'Offer is waiting for checking',
      template: 'check-user-offer',
      context: {
        offerId,
        url,
      },
    });
  }
}
