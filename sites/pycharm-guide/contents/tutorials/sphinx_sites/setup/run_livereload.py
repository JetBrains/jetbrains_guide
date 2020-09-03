from livereload import Server, shell

if __name__ == '__main__':
    server = Server()
    server.watch('*.rst', shell('make html'))
    server.watch('*.md', shell('make html'))
    server.serve(root='_build/html')
