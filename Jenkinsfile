pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20' // Installed via Jenkins NodeJS Plugin
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML([
                reportDir: 'reports/html-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            archiveArtifacts artifacts: 'reports/**, test-results/**', allowEmptyArchive: true
        }
    }
}