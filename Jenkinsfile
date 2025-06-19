pipeline {
  agent any

  stages {
    stage('Run Ansible') {
      steps {
        sh 'ansible-playbook -i inventory.ini deploy.yml'
      }
    }
  }
}
