import jsend from 'jsend';
import db from '../models';
import WorkService from '../services/WorkService';

const workService = new WorkService(db);

export async function GET() {
  try {
    const work = await workService.getAll();

    if (work.length === 0) {
      return Response.json(jsend.fail({ result: 'No work found' }), {
        status: 404,
      });
    }

    return Response.json(jsend.success({ statusCode: 200, result: work }), {
      status: 200,
    });
  } catch {
    return Response.json(jsend.error('Something went wrong fetching work'), {
      status: 500,
    });
  }
}
