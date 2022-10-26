import { PostRepository } from './repositories/post.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { PostSchema } from './models/post.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
    ]),

  ],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
