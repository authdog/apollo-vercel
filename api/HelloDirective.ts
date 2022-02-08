import { SchemaDirectiveVisitor } from "apollo-server-lambda"
import {
  DirectiveLocation,
  GraphQLDirective,
  defaultFieldResolver,
  GraphQLString
} from "graphql";


export class HelloDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName: string = "helloDir") {
    return new GraphQLDirective({
      name: directiveName,
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {}
    });
  }

  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (root: any, args: any, context: any, info: any) => {
      return resolve.call(
        this,
        root,
        args,
        { ...context, hello: "there" },
        info
      );
    };
  }
}
