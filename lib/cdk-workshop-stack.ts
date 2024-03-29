// import { Duration, Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as sns from 'aws-cdk-lib/aws-sns';
// import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const ulalalab = new lambda.Function(this,'UlalalabHandler',{
      runtime: lambda.Runtime.NODEJS_LATEST,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'ulalalab.handler'
    });



    // const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
    //
    // const topic = new sns.Topic(this, 'CdkWorkshopTopic');
    //
    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
