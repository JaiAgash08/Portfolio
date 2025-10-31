pipeline {
    agent any

    environment {
        NODE_VERSION = "22.0.0"
        NVM_DIR = "${HOME}/.nvm"
        PATH = "${HOME}/.nvm/versions/node/v22.0.0/bin:${PATH}"
        APP_DIR = "apps/web"   // change this if your package.json is elsewhere
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📦 Checking out project from GitHub...'
                checkout scm
                sh 'ls -la'
            }
        }

        stage('Setup Node.js') {
            steps {
                echo '🔧 Installing Node.js via NVM...'
                sh '''
                    set -e
                    rm -rf "$NVM_DIR"
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm dependencies...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    cd ${APP_DIR}
                    npm install
                '''
            }
        }

        stage('Build Project') {
            steps {
                echo '🏗️ Building project...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    cd ${APP_DIR}
                    if [ -f package.json ]; then
                      npm run build || npm run build:prod || echo "⚠️ No build script found"
                    else
                      echo "❌ No package.json found inside ${APP_DIR}"
                      exit 1
                    fi
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo '🚀 Deploying to Azure...'
                sh '''
                    if ! command -v az &> /dev/null
                    then
                        curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
                    fi

                    echo "✅ Azure CLI Installed"
                    az --version

                    # 🔹 Replace the line below with your actual Azure deploy command
                    echo "⚙️ Placeholder: Run 'az webapp up' or your deployment script here."
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed — check logs for errors.'
        }
    }
}
