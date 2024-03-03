import { Request, Response } from 'express';
import Joi from "joi";

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === Number(id));
    res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = {id: id, name: name};
  const { error } = planetSchema.validate(newPlanet);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  //planets.push(newPlanet);
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: 'Planet created successfully' });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const { error } = planetSchema.validate({id, name});
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    planets = planets.map(p => p.id === Number(id) ? {...p, name} : p);
    res.status(200).json({ msg: 'Planet updated successfully' });
  }
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter(p => p.id !== Number(id));
    res.status(200).json({ msg: 'Planet deleted successfully' });
};

export { getAll, getOneById, create, updateById, deleteById };
