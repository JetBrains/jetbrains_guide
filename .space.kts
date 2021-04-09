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
            """
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
            """
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
            """
        }
    }
}

job("Build Space Guide") {
    startOn {
        gitPush {
            pathFilter {
                +"sites/space-guide/**"
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
                yarn run space:build
            """
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
            """
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
            """
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
        push("registry.jetbrains.team/p/evan/guide-containers/guide-content-creators")
    }
}