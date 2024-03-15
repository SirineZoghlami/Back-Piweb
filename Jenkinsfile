pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Unit Test') {
            steps {
                script {
                    // Run Jest tests
                    sh 'npx jest'
                }
            }
        }
    
    stage('SonarQube Analysis') {
            steps {
                sh 'mvn sonar:sonar -Dsonar.host.url=http://92.168.1.19:9000 -Dsonar.login=squ_5193ad3ccfbd7c365e874f4ee6544aaf064b184e'
            }
        }
    }
}
