import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export class AwsS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table1 = new dynamodb.Table(this,"Fazeela_table",{
      tableName:"Fazeela_tb",
      partitionKey:{
        name: "id",
        type: dynamodb.AttributeType.STRING
      },
    });
    
  }
}
