import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All properties";
    }
    @Get(':id/:slug')
    findOne(@Param('id') id, @Param('slug') slug){
        return `id=${id}, slug=${slug}`
    }

    @Post()
    create(){
        return"This will create a property"
    }
}
