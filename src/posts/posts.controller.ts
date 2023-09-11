import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('post-list')
  postList() {
    return 'post list';
  }

  @Get('post-add')
  postAdd() {
    return 'post add';
  }

  @Get('detail')
  postDetail() {
    return 'post detail';
  }

  //   @Post('lists/:id')
  //   detailById(@Param('id', ParseIntPipe) id: number): string {
  //     console.log(id, '===');
  //     return 'list user' + id;
  //   }

  //   @Post('lists/:id')
  //   detailById(
  //     @Param(
  //       'id',
  //       new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //     )
  //     id: number,
  //   ): string {
  //     console.log(id, '===');
  //     return 'list user' + id;
  //   }

  @Post('lists/:id')
  detailById(
    @Query('page', new DefaultValuePipe(0))
    page: number,
  ): string {
    console.log(page, '===');
    return 'list user' + page;
  }
}
