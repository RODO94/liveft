export namespace knexConfig {
  namespace development {
    let client: string;
    namespace connection {
      let host: string;
      let database: string;
      let user: string;
      let password: string;
      let charset: string;
    }
    namespace migrations {
      let directory: string;
    }
    namespace seeds {
      let directory_1: string;
      export { directory_1 as directory };
    }
  }
}
export const database: knex.Knex<object, unknown[]>;
import knex from "knex";
