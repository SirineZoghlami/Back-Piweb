pipeline {
    agent any
  environment {
        registry = "92.168.1.19:8081"
       }

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
                script {  
                    def scannerHome = tool 'scanner'
                    withSonarQubeEnv {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                } 
            }
        }

        stage('Build application') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Building images (node and mongo)') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
      stage('Deploy to Nexus') {
            steps {
                script {
                    // Push the Docker image to the Nexus repository
                     sh 'docker push ${registry}/sirine11/nodemongoapp'
                }
            }
        }
    }
}
 