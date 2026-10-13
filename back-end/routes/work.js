import jsend from 'jsend';
import db from '../models';
import WorkService from '../services/WorkService';

const workService = new WorkService(db);

export async function GET(request, { params }) {
  try {
    const { title } = await params;
    const work = await workService.getOne(title);

    if (!work) {
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
