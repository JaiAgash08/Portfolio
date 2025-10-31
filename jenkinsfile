pipeline {
    agent any

    environment {
        AZURE_WEBAPP_NAME = 'my-portfolio-app'
        AZURE_RESOURCE_GROUP = 'my-resource-group'
        NODE_HOME = tool name: 'NodeJS_22', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<your-repo>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Azure') {
            steps {
                withAzureWebApp(
                    azureCredentialsId: 'azure-creds',
                    resourceGroup: "${AZURE_RESOURCE_GROUP}",
                    appName: "${AZURE_WEBAPP_NAME}"
                ) {
                    sh 'az webapp deploy --resource-group $AZURE_RESOURCE_GROUP --name $AZURE_WEBAPP_NAME --src-path build'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Visit https://${AZURE_WEBAPP_NAME}.azurewebsites.net"
        }
        failure {
            echo "❌ Deployment failed. Check logs."
        }
    }
}
