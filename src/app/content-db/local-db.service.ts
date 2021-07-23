import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AboutUsDb } from './marketplace-aboutus';
import { CareersDb } from './marketplace-careers';
import { HomeDb } from './marketplace-home';
import { IndustriesDb } from './marketplace-industries';
import { RayonsoftServicesDb } from './marketplace-rayonsoft-services';
import { SolutionsDb } from './marketplace-solutions';
export class LocalDbService implements InMemoryDbService {
    createDb(): any {
        return {
            'about-us': AboutUsDb.About,
            careers: CareersDb.Careers,
            home: HomeDb.Home,
            industries: IndustriesDb.Industries,
            'rayonsoft-services': RayonsoftServicesDb.RayonsoftServices,
            solutions: SolutionsDb.Solutions,
            marketplace: HomeDb.Home,
        };
    }
}
