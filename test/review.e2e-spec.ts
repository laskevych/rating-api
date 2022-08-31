import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  userName: 'Jhon',
  title: 'Test Review Title',
  rating: 5,
  productId
};

describe('ReviewController (e2e)', () => {
  let app: INestApplication;
  let recordCreatedId: string;
  let notFoundReview = new Types.ObjectId().toHexString();

  beforeEach(async () => {

    jest.setTimeout(20000);

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST) - success', async (done) => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then(({ body } : request.Response) => {
        recordCreatedId = body._id;
        expect(recordCreatedId).toBeDefined();
        done();
      });
  });

  it('/review/:id (DELETE NOT FIND) - success', () => {    
    return request(app.getHttpServer())
      .delete('/review/' + notFoundReview)
      .expect(404);
  });

  afterAll(() => {
    disconnect();
  });
});
