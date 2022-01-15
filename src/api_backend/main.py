from databases import Database
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Defining the constants
USER: str = "dominikschumbert"
PWD: str = ''
HOST: str = 'localhost'
DB: str = 'nordwind'
DATABASE_URL: str = f'mysql+pymysql://{USER}:{PWD}@{HOST}:3306/{DB}'

# Create a new database
database = Database(url=DATABASE_URL)

origins = [
    "http://localhost",
    "http://localhost:3000",
]


# Create a new FastAPI app
app: FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/artikel/{artikel_nr}")
async def get_artikel(artikel_nr: int):
    query: str = f'SELECT * FROM artikel WHERE `Artikel-Nr`={artikel_nr}'
    return await database.fetch_all(query)


