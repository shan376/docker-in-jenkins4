pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git credentialsId: 'your-credentials-id', url: 'https://github.com/shan376/docker-in-jenkins4.git'
            }
        }

        stage('Run Ansible') {
            steps {
                sh 'ssh-keyscan -H 18.246.217.247 >> ~/.ssh/known_hosts'
                sh 'ansible-playbook -i inventory.ini deploy.yml'
            }
        }
    }
}
