from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

user_credentials = {
    'student': {
        'username': 'mcoleary01',
        'password': 'junclin2EPIC'
    },
    'advisor': {
        'username': 'xyang23',
        'password': 'yoloholo98'
    },
    'employer': {
        'username': 'hhamlindgo45',
        'password': 'NAMAST3'
    }
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard', methods=['POST'])
def dashboard():
    if request.method == 'POST':
        selected_user_type = request.form['user_type']
        username = request.form['username']
        password = request.form['password']

        if selected_user_type in user_credentials:
            if username == user_credentials[selected_user_type]['username'] and \
               password == user_credentials[selected_user_type]['password']:
                if selected_user_type == 'student':
                    return redirect(url_for('student_dashboard'))
                elif selected_user_type == 'advisor':
                    return redirect(url_for('advisor_dashboard'))
                elif selected_user_type == 'employer':
                    return redirect(url_for('employer_dashboard'))

        return redirect(url_for('index'))

    return redirect(url_for('index'))

@app.route('/student_dashboard')
def student_dashboard():
    return render_template('student_dashboard.html')

@app.route('/advisor_dashboard')
def advisor_dashboard():
    return render_template('advisor_dashboard.html')

@app.route('/employer_dashboard')
def employer_dashboard():
    return render_template('employer_dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)