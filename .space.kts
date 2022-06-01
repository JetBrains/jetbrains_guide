job("Build PyCharm Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/pycharm-guide/**"
                +"packages/**"
                +"package.json"
            }
        }
    }
    
    container("node:14") {
        resources {
            cpu = 2.cpu
            memory = 4.gb
        }

        env["GATSBY_TELEMETRY_DISABLED"] = "1";
        
        shellScript {
            content = """
                yarn install
                yarn run pc:build
            """.trimIndent()
        }
    }
}

job("Build GoLand Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/goland-guide/**"
                +"packages/**"
                +"package.json"
            }
        }
    }
    
    container("node:14") {
        resources {
            cpu = 2.cpu
            memory = 4.gb
        }

        env["GATSBY_TELEMETRY_DISABLED"] = "1";
        
        shellScript {
            content = """
                yarn install
                yarn run go:build
            """.trimIndent()
        }
    }
}

job("Build WebStorm Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/webstorm-guide/**"
                +"packages/**"
                +"package.json"
            }
        }
    }
    
    container("node:14") {
        resources {
            cpu = 2.cpu
            memory = 4.gb
        }

        env["GATSBY_TELEMETRY_DISABLED"] = "1";
        
        shellScript {
            content = """
                yarn install
                yarn run ws:build
            """.trimIndent()
        }
    }
}

job("Build .NET Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/dotnet-guide/**"
                +"packages/**"
                +"package.json"
            }
        }
    }
    
    container("node:14") {
        resources {
            cpu = 2.cpu
            memory = 4.gb
        }

        env["GATSBY_TELEMETRY_DISABLED"] = "1";

        shellScript {
            content = """
                yarn install
                yarn run dotnet:build
            """.trimIndent()
        }
    }
}

job("Build IntelliJ IDEA Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/intellij-guide/**"
                +"packages/**"
                +"package.json"
            }
        }
    }
    
    container("node:14") {
        resources {
            cpu = 2.cpu
            memory = 4.gb
        }

        env["GATSBY_TELEMETRY_DISABLED"] = "1";

        shellScript {
            content = """
                yarn install
                yarn run intellij:build
            """.trimIndent()
        }
    }
}

job("Docker - Content creators image") {
    startOn {
        gitPush {
            enabled = false // keep as manual build for now

            branchFilter {
                +"refs/heads/main"
            }

            pathFilter {
                +"packages/**"
                +"package.json"
            }
        }
    }

    docker {
        resources {
            cpu = 2.cpu
            memory = 6.gb
        }
        
        build {
            context = "."
            file = "./Dockerfile-ContentCreators"
            labels["vendor"] = "JetBrains"
        }
        push("registry.jetbrains.team/p/jetbrains-guide/guide-containers/guide-content-creators")
    }
}

job("Warmup - Content creators (WebStorm)") {
    git {
        depth = UNLIMITED_DEPTH
        refSpec = "refs/*:refs/*"
    }

    startOn {
        schedule { cron("0 0 * * *") }

        gitPush {
            enabled = true

            branchFilter {
                +"refs/heads/main"
            }
        }
    }

    warmup(ide = Ide.WebStorm) {
        devfile = ".space/webstorm.devfile.yml"
        scriptLocation = "./dev-env-warmup.sh"
    }
}