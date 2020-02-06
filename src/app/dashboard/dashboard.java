
final String dashboardId = "1c1fe111-e2d2-3b30-44ef-a0e111111cde";
final String awsAccountId = "111122223333";

final GetDashboardEmbedUrlResult dashboardEmbedUrlResult =
        client.getDashboardEmbedUrl(new GetDashboardEmbedUrlRequest()
            .withDashboardId(dashboardId)
            .withAwsAccountId(awsAccountId)
            .withIdentityType(IdentityType.IAM)
            .withResetDisabled(true)
            .withSessionLifetimeInMinutes(100l)
            .withUndoRedoDisabled(false)
);

private static AmazonQuickSight getClient() {
	
	final AWSCredentialsProvider credsProvider = new AWSCredentialsProvider() {
	@Override
	public AWSCredentials getCredentials() {
	// provide actual IAM access key and secret key here
	return new BasicAWSCredentials("access-key", "secret-key");
	}
	
	@Override
	public void refresh() {}
	};
	
	return AmazonQuickSightClientBuilder	
	.standard()
	.withRegion(Regions.US_EAST_1.getName())
	.withCredentials(credsProvider)
	.build();
	}

