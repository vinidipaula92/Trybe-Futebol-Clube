module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "matches",
      [
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 19,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 15,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 17,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 2,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 1
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 3,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 2
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 12,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 9,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 15,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 3
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 18,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 2,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 14,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 19,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 4
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 1,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 8,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 15,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 5
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 7,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 3,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 19,
          away_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 6
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 15,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 10,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 8,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 5,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 7
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 6,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 1,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 5,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 8
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 19,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 13,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 4,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 15,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 9
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 9,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 12,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 5,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 6,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 15,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 10
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 16,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 19,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 2,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 5,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 11
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 19,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 4,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 11,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 13,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 20,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 12
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 8,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 12,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 15,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 13
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 10,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 19,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 16,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 11,
          away_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 14
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 9,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 11,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 15,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 6,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 15
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 8,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 2,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 16,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 12,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 20,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 3,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 18,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 6,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 1,
          away_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 16
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 17,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 10,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 19,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 15,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 11,
          away_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 17
        {
          home_team: 8,
          home_team_goals: 0,
          away_team: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 7,
          home_team_goals: 0,
          away_team: 14,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 15,
          home_team_goals: 0,
          away_team: 13,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 2,
          home_team_goals: 0,
          away_team: 3,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 12,
          home_team_goals: 0,
          away_team: 16,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 17,
          home_team_goals: 0,
          away_team: 20,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 9,
          home_team_goals: 0,
          away_team: 10,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 19,
          home_team_goals: 0,
          away_team: 6,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 11,
          home_team_goals: 0,
          away_team: 4,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 18,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 18
        {
          home_team: 20,
          home_team_goals: 0,
          away_team: 15,
<<<<<<< HEAD
          away_team_goals: 3,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 6,
          home_team_goals: 0,
          away_team: 2,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 5,
          home_team_goals: 0,
          away_team: 12,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 13,
          home_team_goals: 0,
          away_team: 7,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 18,
          home_team_goals: 0,
          away_team: 17,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 16,
          home_team_goals: 0,
          away_team: 8,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 4,
          home_team_goals: 0,
          away_team: 9,
<<<<<<< HEAD
          away_team_goals: 2,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 3,
          home_team_goals: 0,
          away_team: 1,
<<<<<<< HEAD
          away_team_goals: 1,
          in_progress: true,
=======
          away_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          home_team: 14,
          home_team_goals: 0,
          away_team: 19,
          away_team_goals: 0,
          in_progress: true,
        },
        {
          home_team: 10,
          home_team_goals: 0,
          away_team: 11,
          away_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 19
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 11,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 20
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 16,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 20,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 4,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 6,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 21
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 5,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 9,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 10,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 6,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 8,
          home_team_goals: 0,
          in_progress: true,
        }, // fim rodada 22
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 4,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 5,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 5,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim rodada 23
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 8,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 6,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 11,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 20,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 24
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 3,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 25
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 4,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 6,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 26
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 8,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 6,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 27
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 4,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 17,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 15,
          home_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 28
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 4,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 6,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 15,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 29
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 12,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 30
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 4,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 13,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 20,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 31
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 7,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 6,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 5,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 18,
          home_team_goals: 0,
          in_progress: true,
        }, // fim da rodada 32
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 19,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 14,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 33
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 9,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 4,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 6,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 34
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 8,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 16,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 20,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 6,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 35
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 19,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 9,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 15,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 4,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 7,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 36
        {
          away_team: 8,
          away_team_goals: 0,
          home_team: 5,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 7,
          away_team_goals: 0,
          home_team: 14,
<<<<<<< HEAD
          home_team_goals: 6,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 15,
          away_team_goals: 0,
          home_team: 13,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 2,
          away_team_goals: 0,
          home_team: 3,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 12,
          away_team_goals: 0,
          home_team: 16,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 17,
          away_team_goals: 0,
          home_team: 20,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 9,
          away_team_goals: 0,
          home_team: 10,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 19,
          away_team_goals: 0,
          home_team: 6,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 11,
          away_team_goals: 0,
          home_team: 4,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 1,
          away_team_goals: 0,
          home_team: 18,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 37
        {
          away_team: 20,
          away_team_goals: 0,
          home_team: 15,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 6,
          away_team_goals: 0,
          home_team: 2,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 5,
          away_team_goals: 0,
          home_team: 12,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 13,
          away_team_goals: 0,
          home_team: 7,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 18,
          away_team_goals: 0,
          home_team: 17,
<<<<<<< HEAD
          home_team_goals: 3,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 16,
          away_team_goals: 0,
          home_team: 8,
<<<<<<< HEAD
          home_team_goals: 4,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 4,
          away_team_goals: 0,
          home_team: 9,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 3,
          away_team_goals: 0,
          home_team: 1,
<<<<<<< HEAD
          home_team_goals: 1,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        },
        {
          away_team: 14,
          away_team_goals: 0,
          home_team: 19,
          home_team_goals: 0,
          in_progress: true,
        },
        {
          away_team: 10,
          away_team_goals: 0,
          home_team: 11,
<<<<<<< HEAD
          home_team_goals: 2,
          in_progress: true,
=======
          home_team_goals: 0,
          in_progress: false,
>>>>>>> baf347a (fix: :bug: Correção de placares que ainda não ocorreram)
        }, // fim da rodada 38
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("matches", null, {});
  },
};
