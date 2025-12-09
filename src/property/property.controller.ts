import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body('name') name) {
    return name;
  }
}
