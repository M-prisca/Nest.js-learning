import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }
  @Get(':id/:slug')
  findOne(@Param('id') id, @Param('slug') slug) {
    return `id=${id}, slug=${slug}`;
  }
  // A body of a request

  // @Post()
  // create(@Body() body){
  //     return body;
  // }


// http status code
  @Post()
  @HttpCode(202)
  create(@Body('name') name) {
    return name;
  }
}
