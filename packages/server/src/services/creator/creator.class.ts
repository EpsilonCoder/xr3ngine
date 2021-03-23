import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Id, Params } from "@feathersjs/feathers";
import { QueryTypes } from "sequelize";
import { Creator as CreatorInterface } from '../../../../common/interfaces/Creator';
import { extractLoggedInUserFromParams } from "../auth-management/auth-management.utils";
import { BadRequest } from '@feathersjs/errors';
/**
 * A class for ARC Creator service
 */
export class Creator extends Service {
  app: Application
  docs: any

  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  /**
   * @function find it is used to find specific users
   *
   * @param params user id
   * @returns {@Array} of found users
   */

  async find (params: Params): Promise<any> {
    const action = params.query?.action;
    const skip = params.query?.$skip ? params.query.$skip : 0;
    const limit = params.query?.$limit ? params.query.$limit : 100;

    const queryParamsReplacements = {
      skip,
      limit,
    } as any;

    if (action === 'current') {
      const loggedInUser = extractLoggedInUserFromParams(params);
      if(loggedInUser?.userId){
        const select = `SELECT creator.*, sr.url as avatar `;
        const from = ` FROM \`creator\` as creator`;
        const join = ` JOIN \`user\` as user ON user.id=creator.userId
                    LEFT JOIN \`static_resource\` as sr ON sr.id=creator.avatarId` ;
        const where = ` WHERE creator.userId=:userId`;      

        queryParamsReplacements.userId = loggedInUser.userId;
        const dataQuery = select + from + join + where;

        const [creator] = await this.app.get('sequelizeClient').query(dataQuery,
          {
            type: QueryTypes.SELECT,
            raw: true,
            replacements: queryParamsReplacements
          });
        return creator;        
      }else{
        return {};
      }
    }

    //creators list
    const dataQuery = `SELECT creator.*, sr.url as avatar 
    FROM \`creator\` as creator
    LEFT JOIN \`static_resource\` as sr ON sr.id=creator.avatarId
    WHERE 1 
    ORDER BY createdAt DESC    
    LIMIT :skip, :limit `;

    const creators = await this.app.get('sequelizeClient').query(dataQuery,
      {
        type: QueryTypes.SELECT,
        raw: true,
        replacements: queryParamsReplacements
      });
    return creators;   

  }

    /**
   * A function which is used to find specific project 
   * 
   * @param id of single Creator
   * @param params contains current user 
   * @returns {@Object} contains specific feed
   * @author Vykliuk Tetiana
   */
    async get (id: Id, params?: Params): Promise<any> {
      const select = `SELECT creator.* , sr.url as avatar `;
      const from = ` FROM \`creator\` as creator 
      LEFT JOIN \`static_resource\` as sr ON sr.id=creator.avatarId`;
      const where = ` WHERE creator.id=:id`;      

      const queryParamsReplacements = {id} as any;      
  
      const dataQuery = select + from + where;
      const [creator] = await this.app.get('sequelizeClient').query(dataQuery,
        {
          type: QueryTypes.SELECT,
          raw: true,
          replacements: queryParamsReplacements
        });
      return creator;
    }

    async create (data: any,  params?: Params): Promise<any> {
      const {creator:creatorModel} = this.app.get('sequelizeClient').models;
      const loggedInUser = extractLoggedInUserFromParams(params);
      data.userId = loggedInUser.userId;
      const creator =  await creatorModel.create(data);
      return  creator;
    }

      /**
   * A function which is used to update creator data
   * 
   * @param id of feed to update 
   * @param params 
   * @returns updated feed
   * @author Vykliuk Tetiana
   */
  async patch (id: string, data?: any, params?: Params): Promise<any> {  
    return await super.patch(id, data);
  }
}