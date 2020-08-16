import React, { useState, FormEvent } from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    }).then((response) => {
      setTeachers(response.data);
    }).catch((error) => {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    })
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Que incrível que você quer dar aulas!'>
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name='materia' 
            label='Matéria'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Física', label: 'Física' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />
          <Select 
            name='week_day' 
            label='Dia da semana'
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input 
            type='time' 
            name='time' 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            label='Hora'
          />
          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher}/>
          })
        }
      </main>
    </div>
  );
}

export default TeacherList;