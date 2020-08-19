import { getDirName } from '../../../lib/utils/index.mjs';
import Tester         from '../../lib/UseCaseTester.mjs';

const tester = new Tester();

const dirname = getDirName(import.meta.url);

tester.setupTestsWithTransactions(
    `${dirname}/../../fixtures/use-cases/admin/admins-create/positive`,
    'admin/admins-create/positive',
    async ({ config: { useCaseClass, before }, input, expected }) => {
        await before(tester.factory);
        await tester.testUseCasePositive({ useCaseClass, input, expected });
    }
);

tester.setupTestsWithTransactions(
    `${dirname}/../../fixtures/use-cases/admin/admins-create/negative`,
    'admin/admins-create/negative',
    async ({ config: { useCaseClass, before }, input, exception }) => {
        await before(tester.factory);
        await tester.testUseCaseNegative({ useCaseClass, input, exception });
    }
);
