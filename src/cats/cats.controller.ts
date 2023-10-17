import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDTO } from './cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  getAllCats(@Req() req) {
    console.log(req.headers);
    return this.catsService.getAllCats();
  }

  @Get('/:id')
  getCatById(
    @Param('id') id: string,
    @Query('name') catName: string | undefined,
  ) {
    return ` catId${id} catName query ${catName}`;
  }

  @Post()
  saveCat(@Body() catDTO: CatDTO): CatDTO & { status: string } {
    return { ...catDTO, status: 'saved' };
  }
}
