import { Controller, Get } from "@nestjs/common";



@Controller('/api')
export class AppController {
    @Get('/user')
    getRootRoute () {
        return " hello there!";
    }

    @Get("/me")
    getByeThere() {
        return 'hello this is another user!';
    }
}
