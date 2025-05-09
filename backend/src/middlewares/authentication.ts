import { NextFunction, Request, Response } from '../http';
import { UnauthorizedError } from '../lib/errors';
import { AuthorizationErrorCode } from '../config/values';

/**
 * Authenticate user and return error if user can't be authenticated
 * @param req Express request
 * @param _res Express response
 * @param next Express next function
 */
export async function AuthenticateAdmin(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const token = (
    req.header('authToken') ||
    req.header('Authorization') ||
    req.query['token'] ||
    ' '
  )
    .toString()
    .split(' ')
    .reverse()[0];

  const { context } = req;
  if (!token) {
    next(
      new UnauthorizedError(
        AuthorizationErrorCode.MISSING_AUTH_TOKEN,
        context,
        'authentication-middleware/AuthenticateUser',
      ),
    );
    return;
  }

  await context.authenticateAdmin(token);

  if (context && context.isAdmin) {
    next();
    return;
  }
  next(
    new UnauthorizedError(
      AuthorizationErrorCode.UNAUTHORIZED,
      context,
      'authentication-middleware/AuthenticateUser',
    ),
  );
}
