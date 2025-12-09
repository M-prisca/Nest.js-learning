import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }
  //   @Get(':id/:slug')
  //   findOne(@Param('id') id, @Param('slug') slug) {
  //     return `id=${id}, slug=${slug}`;
  //   }
  @Get(':id/')
  findOne(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
   console.log(typeof Number(id))
   console.log(typeof sort);
   return id
  }

  // A body of a request

  //   @Post()
  //   create(@Body() body){
  //       return body;
  //   }

  // http status code
  @Post()
  @HttpCode(202)
  create(@Body('name') name) {
    return name;
  }
}
