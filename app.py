from flask import Flask, render_template, redirect, url_for, request
import pyodbc

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

# Configuration for your SQL Server
SERVER = 'mattserver0219.database.windows.net'
DATABASE = 'mattDB'
USERNAME = 'mcoleary02'
PASSWORD = 'Password123'
DRIVER = '{ODBC Driver 17 for SQL Server}'

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

@app.route('/advisor_studentlist')
def advisor_studentlist():
    try:
        # Construct the connection string
        conn_str = (
            f'DRIVER={DRIVER};'
            f'SERVER=tcp:{SERVER},1433;'
            f'DATABASE={DATABASE};'
            f'UID={USERNAME};'
            f'PWD={PASSWORD}'
        )

        # Connect to SQL Server
        conn = pyodbc.connect(conn_str)

        cursor = conn.cursor()

        # Example Query
        cursor.execute("SELECT * FROM [dbo].[Students]")
        students = cursor.fetchall()

        # Close connection
        conn.close()

        # Render HTML template with data
        return render_template('advisor_studentlist.html', students=students)
    except pyodbc.Error as e:
        return f"Error connecting to SQL Server: {e}"

@app.route('/employer_dashboard')
def employer_dashboard():
    return render_template('employer_dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
