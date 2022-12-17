import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['ruling-monster-10313-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cnVsaW5nLW1vbnN0ZXItMTAzMTMk74STc_OY-gvjl4M3f2D_5osqI9DzSjuBV_4',
          password:
            '1En-36TKzQXKP2GbPal1voqueuUzAsMn1of1OJNo9nW_WHKxWlx8hOSR_Er1SFoShEKO6A==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
