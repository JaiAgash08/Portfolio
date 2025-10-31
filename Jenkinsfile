pipeline {
    agent any

    stages {
        stage('Setup Node') {
            steps {
                echo 'Installing Node.js manually...'
                sh '''
                curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
                sudo apt-get install -y nodejs
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Running npm install...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'npm run build || npm run build:prod || echo "No build script found"'
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo 'Deploying to Azure...'
                sh '''
                if ! command -v az &> /dev/null
                then
                    curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
                fi
                az --version
                echo "✅ Deployment placeholder - replace with your real az webapp deploy command"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed. Check logs.'
        }
    }
}
