pipeline {
    agent any

    environment {
        DEPLOY_KEY = '/home/ubuntu/nd.pem'  // Or wherever your SSH key is
    }

    stages {
        stage('Run Ansible') {
            steps {
                // Avoid host key verification issue
                sh 'ssh-keyscan -H 18.246.217.247 >> ~/.ssh/known_hosts'

                // Run the Ansible playbook
                sh 'ansible-playbook -i inventory.ini deploy.yml'
            }
        }
    }
}
