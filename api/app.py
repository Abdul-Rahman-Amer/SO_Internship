from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def create_table():
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            handle TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/submit', methods=['POST'])
def submit_form():
    try:
        create_table()

        form_data = request.json

        name = form_data.get('name')
        email = form_data.get('email')
        handle = form_data.get('handle')

        conn = sqlite3.connect('example.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (name, email, handle) VALUES (?, ?, ?)', (name, email, handle))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Form submitted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
