pipeline {
    agent any

    environment {
      DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }

    stages {
        stage('Checkout codes') {
            steps {
                echo 'Checking out ui code from Git repo'
                git branch: 'main', url: 'https://github.com/nguyencuongabcxyz/daddy_ui.git'
            }
        }
        stage('Build Docker image') {
            steps {
                echo 'Building Docker image'
                bat 'docker build -t nguyenc123/daddy_ui .'
            }
        }
        stage('Login Dockerhub') {
            steps {
                echo 'Logging in Dockerhub'
                bat 'docker login -u %DOCKERHUB_CREDENTIALS_USR% -p %DOCKERHUB_CREDENTIALS_PSW%'
            }
        }
        stage('Publish Docker image') {
            steps {
                echo 'Publish Docker image'
                bat 'docker push nguyenc123/daddy_ui'
            }
        }
    }

    post {
      always {
        bat 'docker logout'
      }

      success {
        build job: 'daddy_deployment'
      }
    }
}