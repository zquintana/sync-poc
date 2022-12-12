provider "aws" {
  region = var.region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project = "sync-poc"
      Env = "sandbox"
    }
  }
}

resource "aws_ecr_repository" "sync_poc_frontend" {
  name = "sync/poc/frontend"
}

resource "aws_ecr_repository" "sync_poc_backend" {
  name = "sync/poc/backend"
}
